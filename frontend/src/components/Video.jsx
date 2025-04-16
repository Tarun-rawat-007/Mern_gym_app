import ReactPlayer from 'react-player'
const Video = () => {
  return (
    <>
    <div>
        <h1>Video Player</h1>
        <ReactPlayer url='' width="750" height="90VH" controls={false} loop={true}/>
    </div>


    </>
  )
}

export default Video