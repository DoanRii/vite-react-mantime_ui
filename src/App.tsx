import { useState } from 'react';
import Darkmode from './components/Darkmode';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
} from '@mantine/core';
import NavLinks from './components/NavLinks';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          navbar={
            <Navbar
              p="md"
              hiddenBreakpoint="sm"
              hidden={!opened}
              width={{ sm: 200, lg: 300 }}
            >
              <Navbar.Section>
                <NavLinks />
              </Navbar.Section>
            </Navbar>
          }
          aside={
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                <Text>Application sidebar</Text>
              </Aside>
            </MediaQuery>
          }
          footer={
            <Footer height={60} p="md">
              Application footer
            </Footer>
          }
          header={
            <Header height={70} p="md">
              <Group sx={{ height: '100%' }} position="apart">
                <Group>
                  <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                    />
                  </MediaQuery>
                  {colorScheme === 'dark' ? (
                    <img
                      style={{ width: '10px', display: 'flex' }}
                      src="./assets/passmanlogo.png"
                    ></img>
                  ) : (
                    <img
                      style={{ width: '10px', display: 'flex' }}
                      src="./assets/passmanlogo-dark.png"
                    ></img>
                  )}
                </Group>
                <Darkmode />
              </Group>
            </Header>
          }
        >
          <Text>Resize app to see responsive navbar in action</Text>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
