import { FC } from 'react';
import { Button, Box, Container, Grid, Paper, Typography, TextField } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import { Controller } from 'react-hook-form';

import { UseHomeContainerType } from './useHome';

import styles from './Home.module.scss';

const Home: FC<UseHomeContainerType> = ({ control, handleSubmit, handleFormSubmit }) => {
  return (
    <Box paddingY="20px" display="flex" alignItems="center" justifyContent="center" minHeight="100dvh">
      <Container>
        <Paper>
          <Box paddingY="48px" paddingX="24px">
            <Typography align="center" variant="h2">
              Welcome to Chat
            </Typography>

            <Box paddingTop="32px">
              <Grid spacing={2} container direction="column" alignItems="center" justifyContent="center">
                <Grid container direction="column" alignItems="center" justifyContent="center" item lg={6} xs={12}>
                  <form
                    className={styles['home__form']}
                    onSubmit={handleSubmit(handleFormSubmit)}
                  >
                    <Controller
                      control={control}
                      name="userName"
                      render={({ field: { onChange, value }, fieldState: { error } }) => {
                        return (
                          <TextField
                            helperText={error ? error.message : null}
                            error={!!error}
                            onChange={onChange}
                            value={value}
                            fullWidth={true}
                            label="Your Name"
                            variant="outlined"
                          />
                        );
                      }}
                    />

                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                    >
                      <Box marginRight="8px" display="flex" alignItems="center" justifyContent="center">
                        <ChatIcon />
                      </Box>

                      <Typography variant="button">
                        Create Chat Room
                      </Typography>
                    </Button>
                  </form>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
