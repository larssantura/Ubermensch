import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  FormLabel,
  Input,
  LinkBox,
  Text,
  Typography,
} from "@chakra-ui/react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useRef, useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [enter, setEnter] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const activeLinkHoverStyles = {};
  let path;
  const Router = useRouter();
  if (Router.query.getMovies) {
    path = Router.query.getMovies[0];
  }
  // console.log(Router.query);

  // } else {
  //   setClicked(false);
  // }
  // if (clicked === true) {
  //   setClicked(false);
  // }
  console.log(path);
  const keyDownHandeler = (e) => {
    if (e.key === "Enter" && search) {
      Router.push(`/search/${search.replaceAll(" ", "_")}`);
      setEnter(true);
    }
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <>
      <Box
        position="fixed"
        zIndex={9999}
        width="100%"
        height={["45px", "45px", "50px", "50px"]}
        display="flex"
        flexDirection="row"
        backgroundColor="#121212"
        color="white"
        fontSize="15"
        justifyContent="space-between"
        paddingRight="8"
        paddingLeft="8"
        paddingTop="3"
        paddingBottom="3"
        alignItems="center"
        borderBottom="1px"
        borderBottomColor="#303030"
        letterSpacing={0.5}
      >
        <Box p="5px" fontWeight={500} transition="1s">
          <Box display={["none", "none", "flex", "flex"]}>
            <Link href="/" passHref>
              <a>
                <span>Ü</span>
                bermensch
              </a>
            </Link>
          </Box>
          <Box color="#0088a9" fontSize={25} display={["", "", "none", "none"]}>
            <Link href="/">Ü</Link>
          </Box>
        </Box>
        <Box>
          <Input
            textAlign="center"
            position="absolute"
            left={["50%", "50%", "50%", "50%"]}
            top="50%"
            transform="auto"
            translateX="-50%"
            translateY="-50%"
            variant="filled"
            backgroundColor="#242424"
            _hover={{
              backgroundColor: "#303030",
            }}
            _focus={{
              border: "1px solid #0088a9",
            }}
            width={[140, 200, 200, 200, 300]}
            size="sm"
            placeholder="Search"
            color="white"
            borderRadius={20}
            display="inline-block"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={keyDownHandeler}
          ></Input>
          {/* <LinkBox display="inline-block">
          <Link href="/">Trending</Link>
        </LinkBox> */}
        </Box>
        <Box
          fontSize={15}
          display={["none", "none", "none", "flex"]}
          alignItems="center"
        >
          <Text
            marginRight={2}
            transition="0.3s"
            paddingTop="1"
            paddingBottom="1"
            backgroundColor={
              path !== "top_rated" && Router.pathname !== "/about"
                ? "#0088a9"
                : "#121212"
            }
            paddingRight="3"
            paddingLeft="3"
            borderRadius="25"
            _hover={
              path !== "top_rated" && Router.pathname !== "/about"
                ? {
                    backgroundColor: "#121212",
                    outline: "2px solid #0088a9",
                  }
                : { backgroundColor: "#0088a9" }
            }
          >
            <Link href={"/Discover/trending"}>Trending</Link>
          </Text>
          <Text
            transition="0.3s"
            paddingTop="1"
            paddingBottom="1"
            paddingRight="3"
            paddingLeft="3"
            borderRadius="25"
            backgroundColor={path === "top_rated" ? "#0088a9" : ""}
            marginRight={2}
            onMouseOver={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
            _hover={
              path === "top_rated"
                ? { outline: "2px solid #0088a9", backgroundColor: "#121212" }
                : { backgroundColor: "#0088a9" }
            }
          >
            <Link href="/Discover/top_rated">Heighest rated</Link>
          </Text>
          <Box
            transition="0.3s"
            paddingTop="1"
            paddingBottom="1"
            backgroundColor={
              path === undefined && Router.pathname === "/about"
                ? "#0088a9"
                : ""
            }
            paddingRight="3"
            paddingLeft="3"
            borderRadius="25"
            onMouseOver={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
            _hover={
              Router.pathname === "/about"
                ? { outline: "2px solid #0088a9", backgroundColor: "#121212" }
                : { backgroundColor: "#0088a9" }
            }
          >
            <Link href="/about">About</Link>
          </Box>
        </Box>
        <Box display={["flex", "flex", "flex", "none"]}>
          <Icon
            onClick={() => {
              setShowMenu(true);
            }}
            icon="ci:menu-alt-05"
            color="white"
            width="28"
            height="28"
          />
        </Box>
        <Box
          width="100vw"
          height="100vh"
          top={0}
          left={0}
          position="fixed"
          zIndex={5}
          onClick={closeMenu}
          opacity={0.5}
          backgroundColor="#121212"
          display={showMenu ? "" : "none"}
        >
          {" "}
        </Box>
        <Box
          height="100vh"
          backgroundColor="black"
          width="50vw"
          textAlign="center"
          alignItems="center"
          position="fixed"
          display={showMenu ? "flex" : "none"}
          flexDir="column"
          justifyContent="center"
          right="0"
          top={0}
          zIndex={5}
        >
          <Box mb={5} cursor="pointer">
            <Icon
              onClick={closeMenu}
              icon="bi:x-lg"
              color="white"
              width="30"
              height="30"
            />
          </Box>
          <Box fontSize={20}>
            <Text
              mb={2}
              transition="0.3s"
              paddingTop="1"
              paddingBottom="1"
              backgroundColor={
                path !== "top_rated" && Router.pathname !== "/about"
                  ? "#0088a9"
                  : ""
              }
              paddingRight="3"
              paddingLeft="3"
              borderRadius="25"
              _hover={
                path !== "top_rated" && Router.pathname !== "/about"
                  ? {
                      backgroundColor: "black",
                      outline: "2px solid #0088a9",
                    }
                  : { backgroundColor: "#0088a9" }
              }
            >
              <Link href={"/Discover/trending"}>Trending</Link>
            </Text>
            <Text
              transition="0.3s"
              paddingTop="1"
              paddingBottom="1"
              paddingRight="3"
              paddingLeft="3"
              borderRadius="25"
              mb={3}
              backgroundColor={path === "top_rated" ? "#0088a9" : ""}
              onMouseOver={() => {
                setHovered(true);
              }}
              onMouseLeave={() => {
                setHovered(false);
              }}
              _hover={
                path === "top_rated"
                  ? { outline: "2px solid #0088a9", backgroundColor: "black" }
                  : { backgroundColor: "#0088a9" }
              }
            >
              <Link href="/Discover/top_rated">Heighest rated</Link>
            </Text>
            <Box
              transition="0.3s"
              paddingTop="1"
              paddingBottom="1"
              backgroundColor={
                path === undefined && Router.pathname === "/about"
                  ? "#0088a9"
                  : ""
              }
              paddingRight="3"
              paddingLeft="3"
              borderRadius="25"
              onMouseOver={() => {
                setHovered(true);
              }}
              onMouseLeave={() => {
                setHovered(false);
              }}
              _hover={
                Router.pathname === "/about"
                  ? { outline: "2px solid #0088a9", backgroundColor: "black" }
                  : { backgroundColor: "#0088a9" }
              }
            >
              <Link href="/about">About</Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <SearchResults search={search} enter={enter} />
    </>
  );
};

export default Navbar;
