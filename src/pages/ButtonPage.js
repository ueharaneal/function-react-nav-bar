import Button from './components/Button';
import { GoBell, GoBrowser , GoDatabase} from 'react-icons/go'

function ButtonPage() {
   
  return (
    <div>
      <div>
        <Button className ="mb-5"secondary rounded outline>
          <GoBell/>
          Click me!!
        </Button>
      </div>
      <div>
       
        <Button danger outline>
          <GoBrowser/>
          Buy Now!
        </Button>
      </div>
      <div>
        
        <Button warning>
          <GoDatabase/>
          See Deal!
        </Button>

      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;