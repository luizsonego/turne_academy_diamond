// import Fancybox from "./fancybox"

function GalleryImage() {
  return (
    // <Fancybox>
    //   <p>
    //     <a data-fancybox="gallery" href="https://lipsum.app/id/33/1024x768">
    //       <img alt="" src="https://lipsum.app/id/33/200x150" />
    //     </a>

    //     <a data-fancybox="gallery" href="https://lipsum.app/id/34/1024x768">
    //       <img alt="" src="https://lipsum.app/id/34/200x150" />
    //     </a>

    //     <a data-fancybox="gallery" href="https://lipsum.app/id/35/1024x768">
    //       <img alt="" src="https://lipsum.app/id/35/200x150" />
    //     </a>

    //     <a data-fancybox="gallery" href="https://lipsum.app/id/36/1024x768">
    //       <img alt="" src="https://lipsum.app/id/36/200x150" />
    //     </a>
    //   </p>
    // </Fancybox>
    <div className="flex justify-center items-center flex-wrap bg-blue-lightest gap-7">
      <div className="bg-white w-40 h-40 rounded shadow-md flex card text-grey-darkest">
        <img className="" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"  />
      </div>
    </div>
  )
}

export default GalleryImage