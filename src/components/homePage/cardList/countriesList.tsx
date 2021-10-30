import CardType from '@root/@types/CardType';
import CountryCard from '@components/homePage/card/countryCard';

const CountriesList: ({ data }: { data: CardType[] }) => JSX.Element = ({ data }) => {
  console.log(data.length);

  return (
    <ul
      className={`
        mt-14 flex flex-col items-center ${
          data.length <= 3 ? 'justify-center' : 'justify-between'
        } gap-12
        lg:flex-row md:flex-wrap md:gap-14
        `}
    >
      {data.map((item) => (
        <CountryCard key={item.name} data={item} />
      ))}
    </ul>
  );
};

export default CountriesList;
