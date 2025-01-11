import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import Footer from '@/components/layout/footer/Footer';
import Navbar from '@/components/layout/navbar/Navbar';

const Users = () => {
  const { id } = useParams(); 
  const [person, setPerson] = useState(null);
  const [images, setImages] = useState([]);
  console.log(images);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const textRefs = useRef([]);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const fetchPersonDetails = async () => {
      try {
        const personResponse = await fetch(
          `https://api.themoviedb.org/3/person/${id}?api_key=fbb2ad881df28e33842f45f5313e2b21&language=en-US`
        );
        const personData = await personResponse.json();
        setPerson(personData);

        const imagesResponse = await fetch(
          `https://api.themoviedb.org/3/person/${id}/images?api_key=fbb2ad881df28e33842f45f5313e2b21`
        );
        const imagesData = await imagesResponse.json();
        setImages(imagesData.profiles || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchPersonDetails();
  }, [id]);

  useEffect(() => {
    if (!loading && person && containerRef.current) {
      const timeline = gsap.timeline();

    
      timeline.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );

      timeline.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8 },
        '-=0.5'
      );

      
      textRefs.current.forEach((ref, index) => {
        timeline.fromTo(
          ref,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.5 },
          `-=${0.3 * index}`
        );
      });

     
      if (imageContainerRef.current) {
        timeline.fromTo(
          imageContainerRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.5'
        );
      }
    }
  }, [loading, person]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!person) {
    return <div>No details found for this person.</div>;
  }

  return (
    <>
      <Navbar />
      <div ref={containerRef} className="container mx-auto p-4 flex flex-col items-center w-[80%]">
        <h1 className="text-3xl font-bold mb-4">{person.name}</h1>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            ref={imgRef}
            src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
            alt={person.name}
            className="rounded shadow-lg w-[300px]"
          />
          <div className="flex flex-col gap-4">
            <p ref={(el) => (textRefs.current[0] = el)} className="text-lg">
              <span className="font-bold">Birthday:</span> {person.birthday || 'N/A'}
            </p>
            <p ref={(el) => (textRefs.current[1] = el)} className="text-lg">
              <span className="font-bold">Place of Birth:</span> {person.place_of_birth || 'N/A'}
            </p>
            <p ref={(el) => (textRefs.current[2] = el)} className="text-lg">
              <span className="font-bold">Biography:</span> {person.biography || 'No biography available.'}
            </p>
            <div ref={imageContainerRef} className="mt-8 w-full">
          <h2 className="text-2xl font-bold mb-4 text-start">Images</h2>
          <div className="overflow-x-auto w-full">
            <div className="flex gap-4 ">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                  alt={`Image ${index + 1}`}
                  className="rounded shadow-lg w-[250px] h-auto"
                />
              ))}
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Users;
