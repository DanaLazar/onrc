import FileSaver from "file-saver";
import ClayTable from '@clayui/table';
import ClayIcon from '@clayui/icon';
import ClayLink from '@clayui/link';
import { data } from '../util/data';
const spritemap = "/icons.svg";

// eslint-disable-next-line react/prop-types
const Table = ({an, luna, id}) => {
   const saveFile = (name) => {
    FileSaver.saveAs(`${process.env.PUBLIC_URL}/files/${name}`, name);
  };
  console.log(id)
  return (
    <ClayTable>
      <ClayTable.Head>
        <ClayTable.Row>
          <ClayTable.Cell expanded headingCell>{"An"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Luna"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Descarca"}</ClayTable.Cell>
        </ClayTable.Row>
      </ClayTable.Head>
      <ClayTable.Body>
      {
        data.map((item) => {
            if (item.id === id && item.an === an && (item.luna === luna || luna === '')) {
                console.log('adevarat')
                return (
                    <ClayTable.Row key={item.an + item.luna}>
                        <ClayTable.Cell headingTitle>{item.an}</ClayTable.Cell>
                        <ClayTable.Cell>{item.luna}</ClayTable.Cell>
                        <ClayTable.Cell onClick={()=>saveFile(item.id + item.an + item.luna+'.xls')}>
                          <ClayLink displayType="secondary">
                            {".xls "}<ClayIcon symbol="download" spritemap={spritemap} />
                          </ClayLink>
                        </ClayTable.Cell>
                    </ClayTable.Row>                 
        )}   
            })
      }
      </ClayTable.Body>
    </ClayTable>
  )
}

export default Table
