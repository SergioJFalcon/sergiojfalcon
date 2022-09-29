import { Fragment, useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, FormControlLabel, FormGroup, Grid, TextField} from '@mui/material';

const Contact = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    email_body: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_dqxu4te","template_5op6qa6",{
      email_body: user.email_body,
      name: user.name,
      email: user.email,
      }).then((result) => {
        console.log(result.text);
        alert(`Sending Sergio your comment/question. `)
        // setSuccessOpen(true);
        // setSubscribeEmail('');
    }, (error) => {
        console.log(error.text);
        // setErrorOpen(true);
    });
  } 
  
  return (
    <Fragment>
      <Grid container sx={{ marginLeft: '2rem', marginBottom: '2rem' }}>
        <Grid item xs={12}>
          <h2>Contact Us</h2>
        </Grid>
        <Grid item xs={12}>

        <p>Is your question not answered in the FAQs? No problem! Contact us here and we will help you out as soon as we can!</p>
        </Grid>
      </Grid>
      <Grid container sx={{ marginLeft: '2rem' }}>
        <form onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <FormGroup sx={{ marginBottom: '2rem', float: 'left' }}>
                <FormControlLabel 
                  control={
                    <TextField 
                      id="user-name-input" 
                      label="Name" 
                      variant="outlined" 
                      onChange={(e) => {
                        e.persist();
                        setUser((prev) => ({
                          ...prev,
                          name: e.target.value
                        }));
                      }}
                      sx={{ 
                        width: '25ch',
                        marginLeft: '1rem',
                      }}
                    />
                  }
                  label="Name"
                  labelPlacement="start"
                />
              </FormGroup>
          </Grid>

          <Grid item xs={12}>
            <FormGroup sx={{ marginBottom: '2rem', float: 'left' }}>
              <FormControlLabel 
                control={
                  <TextField 
                    id="user-email-input" 
                    label="Email" 
                    variant="outlined" 
                    onChange={(e) => {
                      e.persist();
                      setUser((prev) => ({
                        ...prev,
                        email: e.target.value
                      }));
                    }}
                    sx={{ 
                      width: '25ch',
                      marginLeft: '1rem',
                    }}
                  />
                }
                label="Email"
                labelPlacement="start"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
          <FormGroup sx={{ marginBottom: '2rem', float: 'left' }}>
            <FormControlLabel 
              control={
                <TextField 
                  id="user-comment-input" 
                  label="Comment" 
                  variant="outlined" 
                  onChange={(e) => {
                    e.persist();
                    setUser((prev) => ({
                      ...prev,
                      email_body: e.target.value
                    }));
                  }}
                  sx={{ 
                    width: '25ch',
                    marginLeft: '1rem',
                  }}
                />
              }
              label="Comment"
              labelPlacement="start"
            />
          </FormGroup>
          </Grid>
          <Grid item xs={12}>
          <Button 
            variant="contained" 
            color="primary" 
            type="submit"
            sx={{ 
              textAlign: 'center',
              marginLeft: '2rem',
              marginBottom: '5rem',
            }}
          >
            Reach out!
          </Button>
        </Grid>
      </form>
      </Grid>
      
          
          
    </Fragment>
  );
};

export default Contact;
