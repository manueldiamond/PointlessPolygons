

const link=(name,url)=>({name,url})
const footlinks=[
  link('Contact','#'),
  link('Linkedin','#'),
  link('Github','#'),
  link('Facebook','#'),
  link('Email','#'),
  link('Phone Number','#'),
  link('IP Address','#'),
  link('House Address','#'),
  link('Current Location','#'),
  link('My Search History','#'),
  link('all of my Passwords','#'),
  link('BIOMETRICS','#'),
  link('SECONDARY SCHOOL','#'),
  link('EDUCATIONAL HISTORY','#'),
  link('LIFE HISTORY','#'),
  ]
export default function Footer(){
  return (
    <div className='footer center-text'>
     <div className='flex-col center-text mg-auto'>
    <br/>
    <br/>
    <br/>
    
      <p className ='mg-auto center-text'>This is a points grinding game, so.. you know it's pointless... but its got polygons... that you can upgrade into cooler polygons that give you more points.
      </p>
      <h4 className='mg-auto'>Made by an Idiot using React.js/Redux
      </h4>
      
      <p className='mg-auto'>Copywright© ManuelDiamond. All rigts reserved.</p>
      
      <div className='flex-wrap'>
        
          {footlinks.map(link=>(<div className='nobullet space pad-5'><a href={link.url}>{link.name}</a></div>))}
        
        <div className='flex-col'>
        
        </div>
      </div>
     </div>
    </div>
  
  )
}