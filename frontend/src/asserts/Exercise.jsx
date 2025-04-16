import { useEffect, useState } from 'react';

const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [bodyPart, setBodyPart] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const exercisesPerPage = 8;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 100, behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchExercisesData = async () => {
            try {
                let response;
                // Check if bodyPart is 'all' or specific body part to fetch relevant data
                const url = bodyPart === 'all'
                    ? 'https://exercisedb.p.rapidapi.com/exercises'
                    : `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
                
                response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '685bc8e3bfmsh6bb7329cc700f42p115d70jsn815a1987bcc4',
                        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                    }
                });

                const data = await response.json();
                setExercises(data);
                setError(''); // Clear error if fetch is successful
            } catch (error) {
                console.error("Error fetching data:", error);
                setError('Failed to fetch exercises, please try again.');
            }
        };

        fetchExercisesData();
    }, [bodyPart]);  // Fetches data when bodyPart changes

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            const searchValue = searchTerm.trim().toLowerCase(); // Clean input
            const validBodyParts = ['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist'];

            if (validBodyParts.includes(searchValue)) {
                setBodyPart(searchValue); // Update bodyPart with search term
                setError(''); // Clear error if valid body part
            } else {
                setError('Please enter a valid body part (back, cardio, chest, etc.).');
            }
        }
    };

    return (
        <>
            <div id="exercises" className="mt-12 p-5">
                <h3 className="text-3xl font-bold mb-12 text-center">Showing Results</h3>
                
                {/* Search Box */}
                <div className="flex justify-center mb-8">
                    <input 
                        type="text" 
                        placeholder="Search by body part..." 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        onKeyUp={handleSearch} 
                        className="border p-2 rounded-lg w-80 text-center shadow-md"
                    />
                </div>

                {/* Error Message */}
                {error && <p className="text-red-500 text-center">{error}</p>}
                
                <div className="flex flex-wrap justify-center gap-12">
                    {currentExercises.map((exercise, index) => (
                        <div key={index} className="bg-white shadow-md p-5 rounded-lg w-64 text-center">
                            <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-40 object-cover rounded-md" />
                            <h4 className="mt-3 font-bold text-lg">{exercise.name}</h4>
                            <p className="text-sm text-gray-500">{exercise.bodyPart}</p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-24 flex justify-center">
                    {exercises.length > 8 && (
                        <div className="flex space-x-2">
                            {Array.from({ length: Math.ceil(exercises.length / exercisesPerPage) }, (_, i) => (
                                <button 
                                    key={i} 
                                    className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
                                    onClick={() => paginate(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Exercise;
