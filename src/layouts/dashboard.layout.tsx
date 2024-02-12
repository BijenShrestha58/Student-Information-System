import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, Skeleton } from "@mantine/core";
import { DashboardHeader } from "../components/modules/dashboard/Dashboard.header";
import { DashboardSidebar } from "../components/modules/dashboard/Dashboard.sidebar";
import { DashboardRoutes } from "../components/modules/dashboard/Dashboard.routes";

export function DashboardLayout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header
        style={{
          backgroundColor: "#121927",
          color: "#eff2f7",
          borderColor: "gray",
        }}
      >
        <Group h="100%" px="md">
          <Burger
            color="white"
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            color="white"
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <DashboardHeader />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <DashboardSidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <DashboardRoutes />
      </AppShell.Main>
    </AppShell>
  );
}
