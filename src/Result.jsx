import React, {useContext,useEffect,useState} from 'react'
import {NationalityContext} from './MainBox.jsx'

function Result() {
	const userResult = useContext(NationalityContext)
	const [display,setDisplay] = useState(false)

	useEffect(()=>{
		if(userResult.name=="") {
			setDisplay(false)
		} else {
			// setCountries(...countries,userResult.country)
			setDisplay(true)
		}
	},[userResult])


	return(
		<div className={display===false?"hidden":"result-box"}>
			<h2>Result For the Name : {userResult.name}</h2>
			<table>
			  <tr>
			    <td>S.N</td>
			    <td>Country</td>
			    <td>Percentage</td>
			  </tr>
			  {
			  	userResult.country.map((c,i)=>(
						<tr key={c.country_id}>
							<td>{i+1}</td>
							<td>
								<div className="c-flag">
									<b>{c.country_id}</b> <img src={'https://flagsapi.com/'+c.country_id+'/flat/32.png'}/>
								</div>
							</td>
							<td><i>{(parseFloat(c.probability)*100).toFixed(2) + " %"}</i></td>
						</tr>
						))
			  }
			</table>
		</div>
		)
}

export default Result