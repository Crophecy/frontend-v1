import React from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      contactNumber: '',
      query: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  
    fetch('http://localhost:4000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        contactNumber: this.state.contactNumber,
        query: this.state.query,
      }),
    })
    .then(response => {
      console.log('Response:', response);
      return response.json();
    })
    .then(data => {
      console.log('Data:', data);
      console.log('Your response has been submitted'); // Show popup here
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  render() {
    return (

        <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container29">
              <span className="overline">
                <span>Team Crophecy</span>
                <br></br>
              </span>
              <h2 className="home-text85 heading2">Contact Us</h2>
              <span className="home-text86 bodyLarge">
                <span>
                  We are always by your side.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container30">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Container
          maxWidth="md"
          sx={{
            width: '80%',
            backgroundColor: '#758350',
            padding: '20px',
            borderRadius: '5px',
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <TextField
              name="name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              InputProps={{
                style: { color: 'black',backgroundColor: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'black' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#67C9CB',
                  },
                },
              }}
            />
            <TextField
              name="email"
              label="Email"
              value={this.state.email}
              onChange={this.handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              InputProps={{
                style: { color: 'black',backgroundColor: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'black' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#67C9CB',
                  },
                },
              }}
            />
            <TextField
              name="contactNumber"
              label="Contact Number"
              value={this.state.contactNumber}
              onChange={this.handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              InputProps={{
                style: { color: 'black', backgroundColor: 'white'},
              }}
              InputLabelProps={{
                style: { color: 'black' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#67C9CB',
                  },
                },
              }}
            />
            <TextField
              name="query"
              label="Query"
              value={this.state.query}
              onChange={this.handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              InputProps={{
                style: { color: 'black', backgroundColor: 'white'},
              }}
              InputLabelProps={{
                style: { color: 'black' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#67C9CB',
                  },
                },
              }}
            />
            <Box 
              display="flex"
              justifyContent="center"
              marginTop="20px" >
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            </Box>
          </form>
        </Container>
      </Box>
      </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyForm;