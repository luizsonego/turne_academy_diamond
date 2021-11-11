/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    location: 'Tower Hotel',
    city: 'Porto Alegre',
    estate: 'Rio Grande do Sul',
    hour: '20:00',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    location: 'Tower Hotel',
    city: 'Porto Alegre',
    estate: 'Rio Grande do Sul',
    hour: '20:00',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    location: 'Tower Hotel',
    city: 'Porto Alegre',
    estate: 'Rio Grande do Sul',
    hour: '20:00',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    location: 'Tower Hotel',
    city: 'Porto Alegre',
    estate: 'Rio Grande do Sul',
    hour: '20:00',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },

  {
    location: 'Tower Hotel',
    city: 'Porto Alegre',
    estate: 'Rio Grande do Sul',
    hour: '20:00',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    location: 'Tower Hotel',
    city: 'Porto Alegre',
    estate: 'Rio Grande do Sul',
    hour: '20:00',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
]

export default function ListTravel() {
  return (
    <div className="flex justify-center items-center flex-wrap bg-blue-lightest gap-7">
      {people.map((locality, index) => (
        <div key={index} className="bg-white w-96 h-40 rounded shadow-md flex card text-grey-darkest">
          <div className="w-1/2 h-30 rounded-l-sm">
            <div className="image-wrap">
              <img className="" src={locality.image} alt={locality.location} title={locality.location} />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="p-4 pb-0 flex-1">
              <h3 className="font-light mb-1 text-grey-darkest">{locality.location}</h3>
              <div className="text-xs flex items-center mb-4">
                <i className="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                {locality.city}, {locality.estate}
              </div>
              <span className="text-5xl text-grey-darkest">{locality.hour}<span className="text-lg"> Horas</span></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
