import ImageIcon from '@mui/icons-material/Image';
import PdfIcon from '@mui/icons-material/PictureAsPdf';
import GifIcon from '@mui/icons-material/Gif';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import VideoFileIcon from '@mui/icons-material/VideoFile';

export const fileIcons: { [key: string]: JSX.Element} = {
  pdf: <PdfIcon />,
  jpg: <ImageIcon />,
  jpeg: <ImageIcon />,
  png: <ImageIcon />,
  gif: <GifIcon />,
  zip: <FolderZipIcon />,
  tgz: <FolderZipIcon />,
  mp4: <VideoFileIcon />,
  mkv: <VideoFileIcon />
};