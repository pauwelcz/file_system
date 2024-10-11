import { FC } from 'react';
import { useQuery } from "@apollo/client";
import { CONTENT_QUERY } from '../graphlql/graphqlOperations';
import Paper from '@mui/material/Paper';
import { paperStyle } from '../styles';
import { ItemObject } from '../types/item-type';
import Item from './items/Item';

type ContentListProps = {
  pathName: string;
};

const ContentList: FC<ContentListProps> = (props) => {
  // stáhnout data a poslat do listu
  const { pathName } = props;

  const { loading, error, data, refetch } = useQuery(CONTENT_QUERY, { variables: { path: pathName}});


  
  return(
    <div>
      <h2>Content </h2>
      <Paper style={{...paperStyle, flex: 1, display: 'flex', flexDirection: 'column'}} >
        {data?.content.map((item: ItemObject, index: number) => {
          const cleanPath = `${item.path}/${item.name}`.split('/').filter((item) => item !== "").join('/');

          return (
            <div key={index}>
              {item.isDirectory ? (
                <a onClick={() => {window.location.href=`http://localhost:3001/${cleanPath}`}}>
                  <Item item={item} id={index} />
                </a>
              ) : (
              <Item item={item} id={index} />
            )}
            </div>
          );
        })}
    </Paper>
    </div>
  );
}

export default ContentList;