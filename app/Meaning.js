import React from 'react'

function Meaning({meaning}) {
    
    const definitions = meaning.definitions.map((definition, index) => (
        <li className="mt-[0.875rem]" key={index}>
          <p>{definition.definition}</p>
          {definition.example && <p className="text-gray mt-3">{definition.example}</p>}
        </li>
      ))


  return (
    <div>Meaning</div>
  )
}

export default Meaning