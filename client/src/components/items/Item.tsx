import React, { FC, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { COLORS } from '../../types/colors';
import { gridContainerStyle, gridItemStyle } from '../../styles';
import { ItemObject } from '../../types/item-type';
import FolderIcon from '@mui/icons-material/Folder';
import { fileIcons } from '../../shared/fileIcons';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';

type ItemProps = {
  item: ItemObject;
  id: number;
};

const Item: FC<ItemProps> = (props) => {
  const { item } = props;
  const { name, extension } = item;

  const [hover, setHover] = useState(false)

  return (
    
    <Paper style={{backgroundColor: hover ? COLORS.tertiary : COLORS.secondary, borderColor: 'black', margin: 1 }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <Grid container style={gridContainerStyle}>
          <Grid item >
            {extension ? (
              fileIcons[extension.toLowerCase()] ?? <InsertDriveFile />
            ) : (
              <FolderIcon />
            )}
          </Grid>
          <Grid item style={gridItemStyle}>
              <div>
                <strong>{name}</strong>
              </div>
          </Grid>
      </Grid>
    </Paper>
  );
}

export default Item;
