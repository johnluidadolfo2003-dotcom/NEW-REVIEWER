import { DriveItem, SubjectType } from '../types';

export const USER_DRIVE_FOLDER_ID = '13xPdd6pHRaJ_HsX3cmFlluqZ93tCATBG';
export const USER_DRIVE_FOLDER_URL = 'https://drive.google.com/drive/folders/13xPdd6pHRaJ_HsX3cmFlluqZ93tCATBG';

export interface DriveResponse {
  files: DriveItem[];
  nextPageToken?: string;
  folderName?: string;
}

// Infer subject category from file/folder name
export const inferSubjectFromTitle = (title: string): SubjectType => {
  const upper = title.toUpperCase();

  // ESAS is now focused on Engineering Economics (as per user instruction)
  if (
    upper.includes('ECONOM') ||
    upper.includes('ANNUITY') ||
    upper.includes('INTEREST') ||
    upper.includes('DEPRECIATION') ||
    upper.includes('CASH FLOW') ||
    upper.includes('CAPITALIZED') ||
    upper.includes('BREAK-EVEN') ||
    upper.includes('ESAS') ||
    upper.includes('CALTECH')
  ) {
    return 'ESAS';
  }

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
    upper.includes('STATISTICS')
  ) {
    return 'MATH';
  }

  // Default to EE for general engineering/circuits/power/machines
  return 'EE';
};

// Target Folder Names specified by user
export const ESAS_MAIN_FOLDER_NAME = 'ESAS - Engineering Economics';
export const ESAS_RELATED_FOLDER_NAMES = [
  'ESAS - Engineering Economics',
  'ESAS-Engineering Economics',
  'ESAS-Engineeering Economics',
  'economics sample problem',
  'Economics Sample Problems',
  'economics sample problems',
  'Economics Sample Problem',
  'Engineering Economics',
  'Engineering Economy Reviewer',
  'Engineering Economics Past Board Questions'
];

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

// Search user's full Google Drive for engineering review files & notes
export const searchUserDriveForReviewMaterials = async (
  accessToken: string
): Promise<DriveItem[]> => {
  const keywords = ['economy', 'economics', 'annuity', 'esas', 'depreciation', 'interest', 'caltech', 'f789', 'canon', 'review', 'reviewer', 'syllabus', 'math', 'ee'];
  const nameQuery = keywords.map(k => `name contains '${k}'`).join(' or ');
  const query = encodeURIComponent(`(${nameQuery}) and trashed = false and mimeType != 'application/vnd.google-apps.folder'`);
  const fields = encodeURIComponent('files(id, name, mimeType, webViewLink, size, modifiedTime)');
  const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=${fields}&pageSize=40&orderBy=modifiedTime desc`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) return [];
    const data = await response.json();
    const rawFiles = data.files || [];

    return rawFiles.map((file: any) => {
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
        subjectTag: inferSubjectFromTitle(file.name),
        isFolder: false,
      };
    });
  } catch (err) {
    console.warn('Personal drive search skipped:', err);
    return [];
  }
};

// Search specifically for the 'ESAS - Engineering Economics' folder and related economics folders
export const searchForEconomicsFolders = async (
  accessToken: string
): Promise<DriveItem[]> => {
  const folderQueries = ESAS_RELATED_FOLDER_NAMES.map(name => `name contains '${name}'`).join(' or ');
  const query = encodeURIComponent(`(${folderQueries}) and mimeType = 'application/vnd.google-apps.folder' and trashed = false`);
  const fields = encodeURIComponent('files(id, name, mimeType, webViewLink, modifiedTime)');
  const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=${fields}&pageSize=10`;

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.files || []).map((f: any) => ({
      id: f.id,
      name: f.name,
      mimeType: f.mimeType,
      webViewLink: f.webViewLink || `https://drive.google.com/drive/folders/${f.id}`,
      subjectTag: 'ESAS' as SubjectType,
      isFolder: true,
      modifiedTime: f.modifiedTime ? new Date(f.modifiedTime).toLocaleDateString() : undefined,
    }));
  } catch (err) {
    console.warn('Error querying economics folders:', err);
    return [];
  }
};

