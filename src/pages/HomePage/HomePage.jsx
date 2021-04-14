import TextBlock from '../../components/TextBlock/TextBlock'
import ItemCard from '../../components/ItemCard/ItemCard'

import './home-page.css'

const HomePage = (props) => {
  return (
    <main className={`home-page ${props.className}`}>
      <TextBlock className={'text-block'}text={"Currently Available"} />
      <section className={'item-cards'}>
        <ItemCard image={'https://acnhapi.com/v1/icons/fish/1'} name={"20/80"}></ItemCard>
        <ItemCard image={'https://acnhapi.com/v1/icons/sea/1'} name={"20/80"}></ItemCard>
        <ItemCard image={'https://acnhapi.com/v1/icons/bugs/1'} name={"20/80"}></ItemCard>
      </section>
    </main>
  )
};

export default HomePage;