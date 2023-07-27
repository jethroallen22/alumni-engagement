import About from './About';
import Banner from './Banner';
import Experience from './Experience';
import Visitors from './Visitors';

const Profile = () => {

    return (
    <div>
        <Banner />
        <div className="grid grid-rows-3 grid-flow-col gap-4 max-h-[900px] overflow-auto mb-[-30px]">
            <div className="col-span-2 mt-2">
                <About />
                <Experience />
            </div>
            
            <div className="row-span-3">
                <Visitors />
            </div>
                
        </div>
    </div>
  );
};

export default Profile;
