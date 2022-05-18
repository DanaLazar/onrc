import { useState, useContext } from 'react';
import { ClaySelect } from '@clayui/form';
import { data } from '../util/data';
import Table from './Table';
import { StatContext } from '../util/Context'

const Statistics = () => {

  const { ctxid } = useContext(StatContext);
  const [tableVisible, setTableVisible] = useState(false);
  const [select, setSelect] = useState({
	id: ctxid,
	an: '',
	luna: ''
  })
  
  const handleClick = () => {
	if (select.an !== '' && select.an !== 'an') {
		setTableVisible(true);
	}
	if (select.an === 'An') {
		setTableVisible(false);
	}
  }

	let nume, categorie=[];

	for (let i = 0; i < data.length; i++) {
		if (data[i].id === ctxid) {
			nume = data[i].titlu;
			categorie.push(data[i]);
		}
	}
	
	let unique = categorie.map((item)=>item.an);
	const ani = [...new Set(unique)];
  
  return (
    <div className="sheet sheet-lg">
	<div className="sheet-header">
		<h2 className="sheet-title">{nume}</h2>
		<div className="sheet-text">
			Selecteaza luna si anul pentru a descarca informatiile statistice de care ai nevoie:
		</div>
	</div>
	<div className="sheet-section">
	
		<div className="form-group-autofit">
			<div className="form-group-item">
			
				{
				<ClaySelect aria-label="Select Label" id="mySelectId" onChange={(e) => setSelect({...select, luna:'', an:e.target.value})}>
					<ClaySelect.Option
						key='an'
						label='An'
						/>
					{
						
						ani.map(item => (
						<ClaySelect.Option
						key={item}
						label={item}
						value={item}						
						/>
						))
					}
				</ClaySelect>
				}
			</div>
			<div className="form-group-item">
				{
				<ClaySelect aria-label="Select Label" id="mySelectId" onChange={(e) => setSelect({...select, luna:e.target.value})}>
					<ClaySelect.Option
						key='luna'
						label='Luna'
						/>
					{categorie.map(item => (
						item.an === select.an && (
						<ClaySelect.Option
						key={item.an + item.luna}
						label={item.luna}
						value={item.luna}
						/>
						)
					))}
				</ClaySelect>
				}
			</div>
			<div className="form-group-item">
				<button className="btn btn-primary" type="submit" onClick={handleClick}>Selecteaza</button>
			</div>
		</div>
	
	</div>
	{ tableVisible && <Table id={ctxid} an={select.an} luna={select.luna}/> }
</div>
  )
}

export default Statistics