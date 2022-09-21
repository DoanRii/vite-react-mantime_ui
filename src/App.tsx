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
                      src="https://imgs.search.brave.com/WpDMAl-TDIbYAs5qx8KOjez8x6I4T5N4DPZxSWY-5mQ/rs:fit:1000:1000:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z18zNTYyNjguc3Zn.svg"
                    ></img>
                  ) : (
                    <img
                      style={{ width: '10px', display: 'flex' }}
                      src="https://imgs.search.brave.com/8PB_e8ZjSb6UpmdrkEOlV7-RFvw_1ExWfEPE6wRNfnQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzQy/NC8zMzkvb3JpZ2lu/YWwvbG9nb3V0LWlj/b24tdmVjdG9yLWls/bHVzdHJhdGlvbi5q/cGc"
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
