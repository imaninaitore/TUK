import React from 'react'
import { useParams } from 'react-router'
import { useProgrammes } from '@/context/ProgrammeContext'

function FacultyProgrammes() {
  const { faculty } = useParams();
  const { programmes, loading } = useProgrammes()

  if(loading){
    return(
        <div className='text-center py-20'>
            Loading Programmes....
        </div>
    );
  }

   const filteredProgrammes = programmes.filter(
    (programme) =>
      programme.faculty.toLowerCase() ===
      decodeURIComponent(faculty).toLowerCase()
  );
  return (
    <div>

    </div>
  )
}

export default FacultyProgrammes