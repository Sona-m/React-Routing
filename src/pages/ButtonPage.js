import Button from "../components/Button";



function ButtonPage() {

  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <div>
      <Button primary outline onClick={handleClick} className='mb-5'>hii there</Button>
      <Button success rounded>success</Button>
      <Button warning >warning</Button>
      <Button danger >danger</Button>
      <Button secondary >secondary</Button>
      <Button rounded outline danger >outline</Button>
       
    </div>
  );
}

export default ButtonPage;
