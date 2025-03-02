import { useEffect, useState } from "react";
import { authUser, createImage, updateImage } from "./services";
import ClipLoader from "react-spinners/ClipLoader";
import { AiOutlineLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import Auth from "./Auth";
import LidBord from "./LidBord";




function App() {
	const [prompt, setPrompt] = useState("")
	const [image, setImage] = useState()
	const [loading, setLoading] = useState(false)
	const [user, setUser] = useState(localStorage.getItem("clientId") || "")
	const [isLidBord, setLidBord] = useState(false)


	useEffect( () => {
		async function authUserFunc () {
			const response = await authUser({clientId: user})
			if(response){
				localStorage.setItem("clientId", response.clientId)
			}
		}
		authUserFunc()
	}, [user])

	const sendPrompt = async (payload) => {
		setImage()
		const image = await createImage(payload)
		setLoading(true)
		setTimeout(() => {
			setImage(image)
			setPrompt("")
			setLoading(false)
		}, 5000)
	}

	const logOut = () => {
		setUser("")
		localStorage.clear()
	}

	const handleLike = async (data, id) => {
		const response = await updateImage(data, id)
		setImage(response)
	}

	const handleDisLike = async (data, id) => {
		const response = await updateImage(data, id)
		setImage(response)
	}

  return (<div>
		<div style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			width: 720,
			margin: "50px auto",
			padding: 10,
			border: "1px solid #000",
			borderRadius: 5,
			textAlign: "center"
		}}>
			<div>
				<h2>Free ImagesBot</h2>
				{user ? <button style={{position: "relative", bottom: 75, left: 250}} onClick={() => logOut()}>Log Out</button> : null  }
				{user ? <button style={{position: "relative", bottom: 75, left: 270}} onClick={() => setLidBord(true)}>LidBord</button> : null  }
			</div>
			{user ? <div>
				<div >
					<input
						style={{width: "80%",marginBottom: 5}}
						type="text"
						placeholder="Enter prompt"
						value={prompt}
						onChange={(e) => setPrompt(e.target.value)} />
				</div>
				<button style={{marginBottom: 5}} onClick={() => sendPrompt({prompt: prompt})}>Send</button>
				<div>
					<ClipLoader
						color="grey"
						loading={loading}
						size={70}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
					{loading ? <div>Data preparation...</div>  : null}
				</div>
				{image ? <div  id="response">
					<div>
						<img style={{width: 250, height: 250}} src={image.path} alt="" />
						<div>{image.countLike}</div>
						<button style={{width: 50, cursor: "pointer"}} 
										onClick={() => handleLike({count : 1}, image.id)}>
							<AiOutlineLike  />
						</button>
						<button style={{width: 50, cursor: "pointer"}} 
										onClick={() => handleDisLike({count : -1}, image.id)}>
							<AiTwotoneDislike  />
						</button>
					</div>
					
			</div>  : null}
		</div> : <Auth setUser={setUser} />}
    </div>
		{isLidBord ? <LidBord setLidBord={setLidBord} /> : null}

	</div>
    
    
  );
}

export default App;
