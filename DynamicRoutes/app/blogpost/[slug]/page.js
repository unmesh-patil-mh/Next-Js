export default async function Page({ params }) {
  const { slug } = await params; 
  // fetch your blog by its slug
  let language = ["python","css","java","cpp","c#"]
  if(language.includes(slug)){
    return <div>My Language: {slug}</div>
  }else{
    return <div>404 Post Not Found</div>
  }
//   return <div>My Post: {slug}</div>;
}