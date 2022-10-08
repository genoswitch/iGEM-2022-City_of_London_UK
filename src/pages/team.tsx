import * as React from 'react';

import { TextField } from '@mui/material';

import CircularProgressWithLabel from '../components/CircularProgressWithLabel';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ParallaxHeader from '../components/ParallaxHeader';

import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';

import teamData from '../../pages/credits.json';

import 'bootstrap/dist/css/bootstrap.min.css';

const capitalizeWords = (words: string) => {
  const wordArray = words.split(' ');

  const processedArray = wordArray.map(item => {
    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
  });

  return processedArray.join(' ');
};

const ConstructBadge = (text: string, bgCol: string) => {
  return (
    <span style={{ paddingRight: 16 }}>
      <Badge bg={bgCol}>{capitalizeWords(text)}</Badge>
    </span>
  );
};

// valid tags:
// wiki, biology, human practices, hardware, modelling, meow, leaders

const tagColors = {
  wiki: 'dark',
  biology: 'success',
  'human practices': 'warning',
  hardware: 'info',
  modelling: 'danger',
  meow: 'secondary',
  leaders: 'primary',
};

class TeamBadges extends React.Component {
  render() {
    const tagComponents = [];
    if (this.props.tags) {
      this.props.tags.forEach((tag: string) => {
        tagComponents.push(ConstructBadge(tag, tagColors[tag]));
      });
      return <div style={{ paddingTop: 16 }}>{tagComponents}</div>;
    }
  }
}

class CreditEntry extends React.Component {
  static defaultProps = {
    name: 'iGEM Contributor',
    pic: 'https://static.igem.org/websites/common/2022/logos/igem-logo-dark.svg',
    desc: 'iGEM Team Member',
  };

  render() {
    return (
      <div style={{ padding: 16 }}>
        <Card>
          <Row>
            <div class="col-md-4">
              <Card.Img src={this.props.pic} />
            </div>
            <div class="col-md-8">
              <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                {/* If this person has a title, display it under their name. Otherwise, don't display anything there. */}
                {this.props.title ? (
                  <Card.Subtitle>{this.props.title}</Card.Subtitle>
                ) : undefined}

                {/* Display the person's description */}
                <br />
                {this.props.desc}
                <br />
                <TeamBadges tags={this.props.tags} />
              </Card.Body>
            </div>
          </Row>
        </Card>
      </div>
    );
  }
}

class TeamPage extends React.Component {
  bannerImageSrc =
    'https://static.igem.wiki/teams/4508/wiki/team/most-of-team-header-pic.jpg';

  creditEntries = [];
  totalImages: number = 0;

  state = {
    ready: false,
    imagesLoaded: 0,
    searchQuery: '',
  };

  componentDidMount(): void {
    let imagesLoaded = 0;
    // We add an extra image to we can add the banner image to the preload list.
    this.totalImages = teamData.people.length + 1;

    // Preload the banner image
    const image = new Image();
    image.onload = () => {
      imagesLoaded++;
      console.log(`Loaded banner image!`);
      this.setState({ imagesLoaded });
    };
    image.src = this.bannerImageSrc;

    // Sort the people array by surname
    teamData.people.sort((a, b) => {
      const aSurname: string = a.name.split(' ').slice(-1)[0];
      const bSurname: string = b.name.split(' ').slice(-1)[0];
      return aSurname.localeCompare(bSurname);
    });

    // Sort the people array so people with the 'leader' tag are first
    teamData.people.sort((a, b) => {
      const aIsLeader: boolean = a.tags.includes('leaders');
      const bIsLeader: boolean = b.tags.includes('leaders');

      // +bool converts it into an integer
      // ! reverses it
      return +!aIsLeader - +!bIsLeader;
    });

    // Allow for prominent positioning via optional pos key
    teamData.people.sort((a, b) => {
      const aPos: number = a.pos || 99;
      const bPos: number = b.pos || 99;
      return aPos - bPos;
    });

    teamData.people.forEach(person => {
      console.log(`Processing person: ${person.name}`);
      this.creditEntries.push({
        name: person.name,
        component: (
          <CreditEntry
            name={person.name}
            title={person.title}
            pic={person.pic}
            tags={person.tags}
            desc={person.desc}
          />
        ),
      });

      // Preload the image (if one was set)
      if (person.pic) {
        const image = new Image();
        image.onload = () => {
          imagesLoaded++;
          console.log(`Loaded image ${imagesLoaded} of ${this.totalImages}`);
          this.setState({ imagesLoaded });
        };
        image.src = person.pic;
      } else {
        console.log(`${person.name} has no pic, not preloading...`);
        imagesLoaded++;
      }
    });
  }
  componentDidUpdate(): void {
    if (!this.state.ready && this.totalImages == this.state.imagesLoaded) {
      console.log('Images loaded, ready to render page!');
      this.setState({ ready: true });
    }
  }

  render() {
    if (!this.state.ready) {
      // If 0/0, will be NaN, so if undefined set to 0%.
      const loadingPercentage =
        (this.state.imagesLoaded / this.totalImages) * 100 || 0;
      return (
        <div>
          <NavBar />
          <div
            style={{ padding: 100, display: 'flex', justifyContent: 'center' }}
          >
            <Card style={{ width: 300 }}>
              <Card.Body>
                <Card.Title>Loading team members...</Card.Title>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <CircularProgressWithLabel value={loadingPercentage} />
                </div>
              </Card.Body>
            </Card>
          </div>
          <Footer />
        </div>
      );
    }

    return (
      <div>
        <NavBar />
        <ParallaxHeader title={'Meet the Team'} bgSrc={this.bannerImageSrc} />
        <Container>
          <div style={{ paddingTop: 16, paddingLeft: 16 }}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onChange={event =>
                this.setState({ searchQuery: event.target.value })
              }
            />
          </div>
          <div style={{ minHeight: 750 }}>
            {this.creditEntries
              .filter(entry => {
                // If the search query is empty (default state) allow everything
                if (this.state.searchQuery == '') {
                  return true;
                  // Otherwise only return people whose names match the query string.
                } else if (
                  entry.name
                    .toLowerCase()
                    .includes(this.state.searchQuery.toLowerCase())
                ) {
                  return true;
                }
                // map() to only return the component from each item in the array
              })
              .map(e => e.component)}
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default TeamPage;
