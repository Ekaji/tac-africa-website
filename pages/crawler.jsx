/* eslint-disable react/jsx-key */
export default function Crawler() {
  return(
    <div className='container' >
    <div className='row' style={{marginTop: '8em', width: '100%'}}>
      <div className='col-md-6' >
       {/* <img src='/jerry.jpg' style={{width: '70%'}}alt='tac-ngo-africa.jpg' /> */}
      </div>

      <div className='col-md-6' >
        <p>
          Development of web crawlers that can automatically collect websites and virtual communities
          such as online forums. These crawlers would collect the seed URL, automatically
          parse through the hyperlink off the collected webpages. These crawlers will not only
          gather webpages belonging to the forum’s domain or originating Internet Protocol address
          but also hyperlink to websites of hacker forums.
          The technical difficulty of parking the hacker forum that employs the anti-crawling mechanism
          is a scope of research. Also, many of these forums intend to use devices to prevent
          surveillance by law enforcement and to safeguard server resources from being abused by
          rival hacker communities.
        </p>
      </div>

    </div> 
    
</div>
  )
}