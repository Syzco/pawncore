import Title from '@Tab/title'

export default function Tab({title}) {
     return (
          <div className="main-page">
               <Title title={title} />
               <Content />
          </div>
     )
}