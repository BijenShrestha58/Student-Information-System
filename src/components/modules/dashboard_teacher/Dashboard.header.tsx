import { Autocomplete, Group, Burger, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
// import { MantineLogo } from '@mantine/ds';
import classes from "./HeaderSearch.module.css";
import { Logo } from "../../common/Logo";
import { Icon } from "../../common/icons";

const links = [
  { link: "/", label: "Overview" },
  { link: "/dashboard/managestudents", label: "Student's List" },
  { link: "/", label: "Reports" },
];

export function DashboardHeader() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className="hover:text-green-300 duration-200"
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Logo />
        </Group>

        <Group gap={0}>
          <Group ml={50} gap={24} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className="ml-80 mr-3"
            placeholder="Search..."
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
            visibleFrom="xs"
          />
        
          <div className=" border-r pl-3 pr-3 border-gray-300 text-white">
            <Icon name="settings" />
          </div>
        </Group>
      </div>
    </header>
  );
}
