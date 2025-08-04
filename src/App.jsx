import './App.css';
import ImageCarousel from './ImageCarousel';

function App() {
  return (
    <div className="container">
      <h1>Pekoe Trail with Rashii🍃˚⛰️⋆☁️</h1>
      <p>Welcome to my blog—a personal journey along the breathtaking Pekoe Trail, Sri Lanka’s first long-distance hiking route. Stretching 300 kilometers through the misty central highlands, this newly established trail winds through lush tea estates, vibrant villages, and centuries of cultural heritage. Here, I share stories, snapshots, and unforgettable moments from each of the 22 stages—step by step, sip by sip—through the heart of Sri Lanka’s tea country.

</p>

      <div className="gallery">
        <img src="/images/Stage2.jpg" alt="Trip 1" />
        <img src="/images/stage2b.jpg" alt="Trip 2" />
        <img src="/images/stage3.JPG" alt="Trip 3" />
      </div>


      <div className="stage1">
        <h2>Stage 1 : Hanathana to Galaha</h2>
      </div>

      <div className="photo1">
         <ImageCarousel 
           images={['/images/Stage1.jpg', '/images/stage2a.JPG', '/images/Stage2.jpg', '/images/stage2b.jpg', '/images/stage2c.JPG']} 
           altText="Stage 1 - Hanathana to Galaha"
         />
         <a href="https://www.google.com/maps/place/Hantana+Tea+Estate/@6.566667,80.266667,12z/data=!3m1!4b1!4m5!3m4!1s0x39828a5b3b3b3b3b:0x3b3b3b3b3b3b3b3b!8m2!3d6.566667!4d80.266667">Click here to see the Hanthana to Galaha</a>
         <p>The Pekoe Trail starts at the Ceylon Tea Museum on the Hantana Estate. The museum itself is well worth a visit. It occupies the shell of the old Hantana Tea Factory. There is ample space for parking and there are very good toilet facilities.
There is a track that heads up from the Ceylon Tea Museum towards the pass, known as the central tea plantations of Hantana. Its panoramic mountain range features seven peaks. 
The Pekoe Trail follows the concrete path up towards the hotel W15 and the Hill Country Sport Shooting Club. The elevation gain is very gentle. There is a track that peels off to the left towards W15 and soon after a turn around the bend where visitors will see a small house behind a gate up on the right-hand side. This is the Sugarcane Quarantine Center! 
The track continues until the concrete gives way to gravel. There are a few cabanas on either side of the track. There is a trail that peels off to the right towards a small stupa up in the mountain. This is a meditation center and it is recommended to avoid taking this path so as not to disturb. Soon after the meditation center turnoff is the highest elevation point of this stage. The views on the way back towards Kandy are spectacular. On a clear day, Victoria Reservoir and the entire Knuckles Range can be seen to the left. It is impressive to realize the distance covered already.
From the highest point, it's all downhill until a river crossing just before Galaha.
</p>
       </div>
       
       <div className="stage2">
        <h2>Stage 2 : Galaha to Loolkandura</h2>
       </div>

      <div className="photo2">
          <ImageCarousel 
            images={['/images/stage2a.JPG', '/images/Stage2.jpg', '/images/stage2b.jpg', '/images/stage2c.JPG']} 
            altText="Stage 2 - Galaha to Loolkandura"
          />
          <a href="https://www.alltrails.com/explore/trail/sri-lanka/kandy/the-pekoe-trail-stage-02-galaha-to-loolkandura?mobileMap=false&initFlyover=true&flyoverReturnToTrail=">Click here to see the Galaha to Loolkandura</a>
          <p>This walk can be divided into two distinct parts: the first section from Galaha to Deltota and the second from Deltota to Loolecondera.
Galaha to Deltota is a very short and rewarding hike. The first stretch is on the road toward Galaha General Hospital. Soon, it leaves the main road and head into the Deltota Estate. Locals will tell hikers the road to Deltota or Loolecondera is the main road, but there is a better option. The path through the Deltota Estate is beautiful. There is a path to the right from the main road with a signboard stating, "Welcome to the Deltota Estate". There are school grounds and houses to the right as the path approaches a rather steep section. As it ascends, the views behind of the Hantana Estate and the mountains are stunning. Once it reaches the intersection there is a tea weighing station. Take the track to the right.
The path on this stretch is wide and very easy to follow. Soon it reaches a village and the way becomes a little more intricate. There is a bridge to cross on the left. This is an important turning point. If one gets lost, the locals can help - this time do take their advice. There are lots of twists and turns on the approach to Deltota town.
Deltota is a typical hill country town with a lively market, but perhaps the most striking feature of the town is the large green mosque. The market is well worth stopping at. There are plenty of fruits and veggies and a very colorful painted mural.
</p>
       </div>
    </div>
  );
}

       
export default App;
