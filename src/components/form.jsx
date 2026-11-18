import { useState } from "react"

export default function Form(){
    const [email , SetEmail] = useState("")
    const [password , SetPassword] = useState("")
    const [rememberMe , SetRememberMe] = useState(false)
    const [submittedData, setSubmittedData] = useState(null)
    const [showForm, setShowForm] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmittedData({
            email,
            password,
            rememberMe
        })
        SetEmail("")
        SetPassword("")
        SetRememberMe(false)
    }

    return(
        
     <>
     {showForm &&(
        <form id = "formulaire" onSubmit={handleSubmit} action="" className="w-[30%] h-[50vh] bg-gray-800 justify-center items-center flex flex-col rounded-lg shadow-2xl ">
            <h1 className="font-bold text-lg text-gray-900 capitalize justify-center items-center">page de connexion</h1>
            <div className="flex flex-col gap-4  ">
                <div className="flex flex-col gap-2">
                    <input type="text" value={email} onChange={(e)=>SetEmail(e.target.value)} placeholder="entrer votre email " className="border-2 flex h-[6vh] w-full rounded-md " />
                    <input type="text" value={password} onChange={(e)=>SetPassword(e.target.value)} placeholder="entrer votre Mot de password" className="border-2 flex h-[6vh] w-full rounded-md " />
                </div>
                <div className="flex gap-1.5 items-center justify-center">
                    <input type="checkbox" checked= {rememberMe} onChange={(e)=>SetRememberMe(e.target.checked)} className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 cursor-pointer"/>
                    <label htmlFor="" className="text-sm font-medium text-gray-800select-none">c'est souvenir de sont mots de passe</label>
                </div>
                <button type="submit" className=" flex border-2 rounded-md w-full h-[6vh] justify-center items-center ">connexion</button>
            </div>
            <div>
                
            </div>
            
             </form>
    )}
   
      {!showForm && (
        <button 
          onClick={() => setShowForm(true)}
          className="px-4 py-2  bg-gray-700 font-normal text-white rounded-lg flex items-center justify-center w-[12%] h-[6vh] "
        >
          Se connecter
        </button>
      )}
            
   
            <div id= "fichie_recup" className="w-[30%] v-[80vh] bg-gray-700  ">
                {submittedData && (
                    <div className="p-4 bg-gray-700 rounded-lg border border-gray-600 space-y-2 mt-4">
                        <h1 className="font-bold text-lg text-gray-900">les donnees recuperer</h1>
                        <p><strong>Email :</strong> {submittedData.email} </p>
                        <p><strong>password :</strong> {submittedData.password} </p>
                        <p><strong>se souvenir :</strong> {submittedData.rememberMe ? "Oui" : "Non"} </p>
                    </div>
                )}
            </div>
      
        </>
        
    )
}