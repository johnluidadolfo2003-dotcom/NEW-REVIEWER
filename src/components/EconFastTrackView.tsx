import React from "react";
import { EconomicsStudyHub } from "./EconomicsStudy";
interface EconFastTrackViewProps {
  onGoToDriveProblems?: (day?: number) => void;
  onGoToCalTech?: () => void;
  onGoToFormulas?: () => void;
}
export const EconFastTrackView: React.FC<EconFastTrackViewProps> = () => (
  <EconomicsStudyHub />
);
