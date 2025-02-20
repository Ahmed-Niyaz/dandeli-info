import Image from "next/image";

const DandeliInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Dandeli</h1>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Dandeli_1.jpg/250px-Dandeli_1.jpg"
          alt="Dandeli city view"
          className="w-full h-auto rounded-lg mb-2 object-cover shadow-md"
          width={"100"}
          height={"100"}
        />
        <p className="text-sm text-gray-500">
          Coordinates: <a href="https://maps.app.goo.gl/XzGDQfCZbk1SqRTS6" target="_blank">15.2361° N, 74.6173° E</a>
        </p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p>
          In the early 1930s, Dandeli was a humble riverside settlement with a
          population of only 515, where most residents worked in the forestry
          department or at the government sawmill, and the community was a
          vibrant mix of Konkanis, Devali, Marathas, Kuruba, Lambani, African,
          and Muslim families; nestled on the bank of the Kali river, the town
          gradually transformed into an industrial hub with pioneering
          companies—such as The Indian Plywood Manufacturing Company, Lalbhai
          Ferro-manganese Factory, West Coast Paper Mill, and Indian Saw
          Mill—along with several smaller industries linked to the Karnataka
          Power Corporation, constructing power-generating dams along the river
          and paving the way for what was later known as new-Dandeli. At the
          same time, education was almost non-existent until 1936, when local
          visionaries Shivaji Narvekar, Pundalik Pai, Sadanand Gopal Nadkarni,
          Balappa Chavan, and Bapshet came together to build a modest one-room
          school in a hut on a nearby hill, appointing Ramachandra Ganapat
          Nayak—who had migrated from Sanikatta near Gokarn—to run the school;
          starting with just 18 students, three of whom were older than their
          teacher R.G. Nayak, the school soon became a symbol of the community's
          resolve for progress, earning official recognition from the British
          government in 1939 and marking a significant turning point in
          Dandeli's social and educational development.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Name Origin</h2>
        <p>
          A local legend states that the city is named after Dandelappa, a local
          deity and servant of the Mirashi landlords who died because of his
          loyalty. Alternatively, it is said that a king named Dandakanayaka
          passed through the forests and named the area after himself, with the
          city believed to stand on the spot where Dandakaranya once stood.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Geography & Climate</h2>
        <p>
          Dandeli is located at 15°14′51.7884″N 74°37′46.8408″W with an average
          elevation of 473 metres (1,552 ft). It receives heavy rainfall from
          August to November and, due to its good forest cover and moderate
          elevation, experiences a tropical highland climate with summer
          averages of about 27 °C (81 °F) and winter averages of 18 °C (64 °F).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Wildlife Sanctuary</h2>
        <p>
          The area is a natural habitat for tigers, leopards, black panthers,
          elephants, gaur, deer, antelopes, and bears. It is the second largest
          wildlife sanctuary in Karnataka and was designated a tiger reserve in
          2007. The jungle also hosts numerous reptiles and nearly 270 varieties
          of birds. However, rapid industrial expansion has raised ecological
          concerns, leading to the formation of local volunteer groups.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Demographics</h2>
        <p>
          According to the 2001 India census, Dandeli had a population of 53,287
          with males constituting 51% and females 49%. The average literacy rate
          is 74% (male literacy at 81% and female literacy at 68%), which is
          higher than the national average of 65%. Additionally, 11% of the
          population is under six years of age. Kannada is widely spoken in the
          region, although migration due to poor employment opportunities has
          reduced the population over time. The West Coast Paper Mills is one of
          the largest employers and primary landowners.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <div>
          <h3 className="text-xl font-semibold mt-4">Schools in Dandeli</h3>
          <ul className="list-disc ml-6">
            <li>
              St Michaels Convent School, Dandeli (Primary and High School)
            </li>
            <li>Rotary School, Dandeli (Primary and High School)</li>
            <li>
              Janata Vidyalaya, Dandeli (Primary and High School – Kannada and
              English medium)
            </li>
            <li>DFA School</li>
            <li>Anglo Urdu High School (Muslim Education Society Dandeli)</li>
            <li>Government School, Dandeli</li>
            <li>Kanya Vidyalaya, Dandeli</li>
            <li>Tauheed Education Society</li>
            <li>
              Bangur Nagar Hindi Higher Secondary School (Dandeli Education
              Society Hindi School)
            </li>
            <li>BLDE Education Society</li>
            <li>Govt. School Bilpar Dandeli (Primary and High School)</li>
            <li>Bangur Nagar Kannada Higher Primary School</li>
            <li>Adarsh Vidyalaya School (Ambewadi)</li>
            <li>Government Primary School, Ambewadi</li>
            <li>Paridyan School</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">
            Pre-university Colleges
          </h3>
          <ul className="list-disc ml-6">
            <li>Bangur Nagar Pre-University Composite Junior College</li>
            <li>Janata Vidyalaya</li>
            <li>Tauheed Education Society</li>
            <li>Government College Old Dandeli</li>
            <li>Kanya Vidyalaya Pre-university College, Dandeli</li>
            <li>K.L.E. Society's Institute of Nursing Sciences, Dandeli</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Degree Colleges</h3>
          <ul className="list-disc ml-6">
            <li>DES Bangaur Nagar Degree College</li>
            <li>Govt Degree College, Dandeli</li>
            <li>Govt Degree College, Old Dandeli</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Other Institutions</h3>
          <ul className="list-disc ml-6">
            <li>Sarvatomukh Vikas Kendra Dandeli (RI)</li>
            <li>S.V.K.'s Andakarimth Udyog Margadarshi Kendra Dandeli</li>
            <li>Kali Seva Pratistan Ganesh Nagar Dandeli</li>
            <li>
              Govt. Tool Room & Training Centre: Ambewadi Industrial Estate
            </li>
            <li>
              Asha Kiran Rural Private Industrial Training Institute, Ambewadi –
              under the aegis of Karwar Diocesan Development Council, Bishop's
              House, Karwar
            </li>
            <li>S.U.C. Polytechnic, Dandeli</li>
            <li>VTU – National Academy for Skill Development, Dandeli</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Tourism</h2>
        <p>
          Dandeli resorts have become a notable attraction for both domestic and
          international visitors. The rich forest biodiversity supports
          eco-tourism and adventure sports such as white-water rafting (even in
          peak summer months), kayaking, zorbing, jungle safaris, canoeing, and
          river crossing.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Landmarks</h2>
        <p className="mt-4">
          The town is surrounded by natural, historic, and religious landmarks
          including the River Kali, the caves of Kavala, Syntheri Rocks, the
          Ulavi temple, and Sykes Point. The Karnataka Power Corporation
          residential colony in Ambikanagar (18 km or 11 miles away) and nearby
          hydroelectric projects like Nagajhari powerhouse, Supa Dam, Tattihalla
          Dam, and Bommanahalli Dam add to the local attractions.
        </p>
      </section>

      <footer className="mt-8 text-sm text-gray-500 text-center">
        <p>Source: From Wikipedia, the free encyclopedia</p>
      </footer>
    </div>
  );
};

export default DandeliInfo;
