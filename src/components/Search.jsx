import React from 'react'
import { Flex, Input } from '../styledComponents'
import { RiSearch2Line } from 'react-icons/ri'

const Search = ({query,search,setQuery}) => {
  return (
    <>
       <Flex>
          <Input
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
            value={query}
          />
          <RiSearch2Line
            style={{ transform: "translateX(-23px)", color: "#A6A6A6" }}
          />
        </Flex>
    </>
  )
}

export default Search