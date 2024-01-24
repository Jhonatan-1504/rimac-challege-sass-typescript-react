type PropsLink = {
  text: string;
}

export default function Link({text}:PropsLink){
  return <div> <a className="link" href="#">{text}</a> </div>
}