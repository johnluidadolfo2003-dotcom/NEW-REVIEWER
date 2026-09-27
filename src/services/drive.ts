import { DriveItem, SubjectType } from '../types';

export const USER_DRIVE_FOLDER_ID = '1QuOW-WCYJ-kdQXTLGrh3V_OHTq3awb3d';
export const USER_DRIVE_FOLDER_URL = 'https://drive.google.com/drive/folders/1QuOW-WCYJ-kdQXTLGrh3V_OHTq3awb3d';

export interface DriveResponse {
  files: DriveItem[];
  nextPageToken?: string;
  folderName?: string;
}

// Infer subject category from file/folder name
export const inferSubjectFromTitle = (title: string): SubjectType => {
  const upper = title.toUpperCase();
  if (
    upper.includes('MATH') ||
    upper.includes('CALCULUS') ||
    upper.includes('ALGEBRA') ||
    upper.includes('TRIGONOMETRY') ||
    upper.includes('GEOMETRY') ||
    upper.includes('DIFFERENTIAL') ||
    upper.includes('INTEGRAL') ||
    upper.includes('LAPLACE') ||
    upper.includes('PROBABILITY') ||
    upper.includes('STATISTICS') ||
    upper.includes('ECONOMY')
  ) {
    return 'MATH';
  }

  if (
    upper.includes('ESAS') ||
    upper.includes('MECHANICS') ||
    upper.includes('STRENGTH') ||
    upper.includes('THERMO') ||
    upper.includes('FLUID') ||
    upper.includes('CHEMISTRY') ||
    upper.includes('PHYSICS') ||
    upper.includes('PEC') ||
    upper.includes('CODE') ||
    upper.includes('RA 7920') ||
    upper.includes('LAW') ||
    upper.includes('MANAGEMENT') ||
    upper.includes('ETHICS') ||
    upper.includes('MATERIALS')
  ) {
    return 'ESAS';
  }

  // Default to EE for general engineering/circuits/power/machines
  return 'EE';
};

// Fetch files from Google Drive
export const fetchFolderFiles = async (
  accessToken: string,
  folderId: string = USER_DRIVE_FOLDER_ID
): Promise<DriveItem[]> => {
  const query = encodeURIComponent(`'${folderId}' in parents and trashed = false`);
  const fields = encodeURIComponent('files(id, name, mimeType, webViewLink, size, modifiedTime, iconLink)');
  const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=${fields}&pageSize=100&orderBy=folder,name`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('AUTH_EXPIRED');
    }
    const errText = await response.text();
    throw new Error(`Drive API error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  const rawFiles = data.files || [];

  return rawFiles.map((file: { id: string; name: string; mimeType: string; webViewLink?: string; size?: string; modifiedTime?: string }) => {
    const isFolder = file.mimeType === 'application/vnd.google-apps.folder';
    const subject = inferSubjectFromTitle(file.name);
    
    // Format human readable size
    let formattedSize = '';
    if (file.size) {
      const bytes = parseInt(file.size, 10);
      if (bytes < 1024) formattedSize = `${bytes} B`;
      else if (bytes < 1024 * 1024) formattedSize = `${(bytes / 1024).toFixed(1)} KB`;
      else formattedSize = `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }

    return {
      id: file.id,
      name: file.name,
      mimeType: file.mimeType,
      webViewLink: file.webViewLink || `https://drive.google.com/file/d/${file.id}/view`,
      size: formattedSize,
      modifiedTime: file.modifiedTime ? new Date(file.modifiedTime).toLocaleDateString() : undefined,
      subjectTag: subject,
      isFolder,
    };
  });
};
