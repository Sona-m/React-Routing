import Button from "../components/Button";

function ButtonPage() {
  return (
    <div className="flex items-center justify-center mt-28">
      <div className="grid grid-cols-3 gap-4">
        <Button primary outline rounded>
          Primary
        </Button>
        <Button secondary outline rounded>
          Secondary
        </Button>
        <Button success outline rounded>
          Success
        </Button>
        <Button danger outline rounded>
          Danger
        </Button>
        <Button warning outline rounded>
          Warning
        </Button>
        <Button primary outline>
          Primary
        </Button>
        <Button secondary outline>
          Secondary
        </Button>
        <Button success outline>
          Success
        </Button>
        <Button danger outline>
          Danger
        </Button>
        <Button warning outline>
          Warning
        </Button>
        <Button primary rounded>
          Primary
        </Button>
        <Button secondary rounded>
          Secondary
        </Button>
        <Button success rounded>
          Success
        </Button>
        <Button danger rounded>
          Danger
        </Button>
        <Button warning rounded>
          Warning
        </Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button success>Success</Button>
        <Button danger>Danger</Button>
        <Button warning>Warning</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
