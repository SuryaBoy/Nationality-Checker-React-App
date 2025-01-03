import React, {useState,useContext,createContext} from 'react'
import Result from './Result.jsx'

export const NationalityContext = createContext()

function MainBox () {
	const [name,setName] = useState("")
	const [country, setCountry] = useState({
		count:0,
		name:"",
		country:[
			
		]
	})
	const [loader,setLoader] = useState(false)

	function handleNameChange(e) {
		setName(e.target.value)
	}

	function handleNationalitiesChange(data) {
		setCountry(c => ({...c,...data}))
		handleLoaderChange(false)
	}

	function handleLoaderChange(bol) {
		setLoader(bol)
	}

	function handleSubmit(e) {

		e.preventDefault()

		// form validation
		if (name === "") {

		} else {
			const form = e.target
			const formData = new FormData(form)

		    const formJson = Object.fromEntries(formData.entries());
			// console.log(formJson.name);
		    handleLoaderChange(true)
			fetch('https://api.nationalize.io/?name='+name,{
				method:'get'
			}).then(response=>response.json())
			.then(data=>{
				console.log(data)
				handleNationalitiesChange(data)
			})
		}
	}
	return(
		<div className="main-box">
			<h2>Check</h2>
			<form className="main-form" method="get" onSubmit={handleSubmit}>
			    <lable>Enter The Name </lable>
				<input name="name" onChange={handleNameChange} type="text" placeholder="Name" required/>
				<button type="submit" className="submit-btn">Check</button>
			</form>
			<div className={loader===true?"loader":"hide"}></div>
			<NationalityContext.Provider value={country}>
				<Result></Result>
			</NationalityContext.Provider>
		</div>
		)
}

export default MainBox