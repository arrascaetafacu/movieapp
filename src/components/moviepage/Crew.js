import * as Accordion from '@radix-ui/react-accordion'
import { CaretDown } from 'phosphor-react'

const Crew = ({ crew }) => {
  const jobs = {}
  crew.filter(person => person.department !== 'Crew')
    .forEach(person => {
      if (!jobs[person.department]) {
        jobs[person.department] = [person.name]
      } else {
        jobs[person.department].push(person.name)
      }
  })

  return (
    <Accordion.Root className='my-8 w-3/5 mx-auto' type='single' dafaultValue='item-1'>
      {Object.keys(jobs).map((job, i) => (
        <Accordion.Item
          value={`item-${i}`}
          className='border-b border-gray-300 text-bold p-4
          focus-within:border focus-within:border-black
          '
        >
          <Accordion.Header className=''>
            <Accordion.Trigger className='group '>
              {job} <CaretDown className='inline-block group-radix-state-open:rotate-180 transition-transform'/>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className='transition-transform duration-1000 ease-in-out'>
            <ul className='my-4 text-gray-600'>
              {jobs[job].map(name => <li key={name}>{name}</li>)}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

export default Crew