import * as Tabs from '@radix-ui/react-tabs'
import Cast from './Cast'
import Crew from './Crew'
import Details from './Details'


const tabs = [
  {
    title: 'Cast',
    value: 'tab1',
  },
  {
    title: 'Crew',
    value: 'tab2',
  },
  {
    title: 'Details',
    value: 'tab3',
  },
  {
    title: 'Trailer',
    value: 'tab4',
  },
]

const InfoTabs = ({ movie }) => {
  return (
    <Tabs.Root className='my-16 lg:w-4/5 mx-auto' defaultValue='tab1'>
      <Tabs.List className='flex justify-center border-b-2 border-gray-300'>
        {tabs.map(({ title, value}) => (
          <Tabs.Trigger
            key={`tab-trigger-${value}`}
            value={value}
            className='px-8 py-3 -mb-0.5 rounded-t-md hover:text-orange-400
            radix-state-active:bg-orange-300 radix-state-active:text-white radix-state-active:border-b-4 border-orange-500
            '
          >
            <span>
              {title}
            </span>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.Content value='tab1'>
        <Cast movie={movie} />
      </Tabs.Content>
      <Tabs.Content value='tab2'>
        <Crew crew={movie.credits.crew} />
      </Tabs.Content>
      <Tabs.Content value='tab3'>
        <Details movie={movie} />
      </Tabs.Content>
      <Tabs.Content value='tab4'>
        <iframe
          className='w-[600px] mx-auto my-10 aspect-video'
          title='YouTube video player'
          src={
            `https://youtube.com/embed/${movie.videos.results.find(video => video.type === 'Trailer').key}`
          }
        >
        </iframe>
      </Tabs.Content>
    </Tabs.Root>
)
}

export default InfoTabs