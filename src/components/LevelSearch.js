import React, { useState } from "react";
import { Box, Typography, Select, MenuItem, IconButton, InputBase } from "@mui/material";
import { Search, CalendarToday, Share, ArrowDropDown } from "@mui/icons-material";

const LevelSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allComing, setAllComing] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchAllComing, setSearchAllComing] = useState("");
  const [searchSortBy, setSearchSortBy] = useState("");

  const allComingOptions = ["All Upcoming", "Ongoing", "Completed"];
  const sortOptions = ["Sort", "Date", "Popularity"];

  const filteredAllComing = allComingOptions.filter(option =>
    option.toLowerCase().includes(searchAllComing.toLowerCase())
  );

  const filteredSortOptions = sortOptions.filter(option =>
    option.toLowerCase().includes(searchSortBy.toLowerCase())
  );

  const levels = [
    {
      id: 1,
      level: "L1",
      title: "1: Analysing Boot Camp",
      description: "Master Code Talent Room 2025",
      date: "17 Feb 2025 10:00 AM - 23 Feb 2025 11:59PM",
    }
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>

      {/* Search & Filter Bar */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap", justifyContent: "space-between" }}>
        
        {/* Search Bar */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "50px",
            padding: "8px 16px",
            minWidth: 200
          }}
        >
          <InputBase
            placeholder="Search Your Levels..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ flex: 1 }}
          />
          <Search color="action" />
        </Box>

        {/* All Coming Dropdown */}
        <Select
          value={allComing}
          onChange={(e) => setAllComing(e.target.value)}
          displayEmpty
          variant="outlined"
          sx={{ flex: 1, borderRadius: "50px", backgroundColor: "white", minWidth: 150 }}
          IconComponent={ArrowDropDown}
          renderValue={() => allComing || "All Upcoming"}
        >
          <MenuItem disabled>
            <InputBase
              placeholder="Search..."
              value={searchAllComing}
              onChange={(e) => setSearchAllComing(e.target.value)}
              sx={{ width: "100%", p: 1 }}
            />
          </MenuItem>
          {filteredAllComing.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>

        {/* Sort Dropdown */}
        <Select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          displayEmpty
          variant="outlined"
          sx={{ flex: 1, minWidth: 150, borderRadius: "50px" }}
          IconComponent={ArrowDropDown}
          renderValue={() => sortBy || "Sort"}
        >
          <MenuItem disabled>
            <InputBase
              placeholder="Search..."
              value={searchSortBy}
              onChange={(e) => setSearchSortBy(e.target.value)}
              sx={{ width: "100%", p: 1 }}
            />
          </MenuItem>
          {filteredSortOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Level Details Section (No Outer Box) */}
      {levels.map((level) => (
        <Box key={level.id} sx={{ display: "flex", alignItems: "center", gap: 2, p: 1 }}>
          
          {/* Level Indicator */}
          <Box sx={{
            width: 60,
            height: 60,
            backgroundColor: "lightblue",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px"
          }}>
            <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
              {level.level}
            </Typography>
          </Box>

          {/* Level Information */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {level.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {level.description}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <CalendarToday fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {level.date}
              </Typography>
            </Box>
          </Box>

          {/* Share Icon */}
          <IconButton>
            <Share />
          </IconButton>
        </Box>
      ))}

    </Box>
  );
};

export default LevelSearch;
