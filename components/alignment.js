export default function Alignment() {
  return (
      <div className="flex justify-between p-4">
        <AlignLeft/>
        <AlignCenter/>
        <AlignRight/>
        <AlignTop/>
        <AlignMiddle/>
        <AlignBottom/>
        <DistributeHorizontally/>
        <DistributeVertically/>
      </div>
  )
}

const AlignLeft = () => {
  return(
    <button>
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-align-start" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M1.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
        <path d="M3 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z"/>
      </svg>
    </button>
  )
}

const AlignCenter = () => {
  return(
    <button>
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-align-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1zm0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5zM2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z"/>
      </svg>
    </button>
  )
}

const AlignRight = () => {
  return(
    <button>
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-align-end" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"/>
      </svg>
    </button>
  )
}

const AlignTop = () => {
  return(
    <button>
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-align-top" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10z"/>
        <path fill-rule="evenodd" d="M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"/>
      </svg>
    </button>
  )
}

const AlignMiddle = () => {
  return(
    <button>
     <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-align-middle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8zm14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5z"/>
      </svg>
    </button>
  )
}

const AlignBottom = () => {
  return(
    <button>
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-align-bottom" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2z"/>
        <path fill-rule="evenodd" d="M1 14.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </button>
  )
}

const DistributeHorizontally = () => {
  return(
    <button>
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-distribute-horizontal" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5zm-13 0a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
        <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10z"/>
      </svg>
    </button>
  )
}

const DistributeVertically = () => {
  return(
    <button>
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-distribute-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5zm0 13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"/>
        <path d="M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z"/>
      </svg>
    </button>
  )
}
