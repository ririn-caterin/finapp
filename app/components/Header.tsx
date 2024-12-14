import {
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={2}
      borderBottom={1}
      borderColor="#ededed"
    >
      <Typography fontWeight={600} fontSize={24}>
        FinApp
      </Typography>

      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 300,
          boxShadow: "none",
          border: "1px solid #efefef",
        }}
      >
        <SearchIcon />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
        />
      </Paper>

      <Box display="flex" alignItems="center">
        <IconButton
          sx={{
            border: "1px solid #efefef",
            borderRadius: "10px",
            padding: "4px",
          }}
        >
          <Badge color="secondary" variant="dot" overlap="circular">
            <NotificationsNoneIcon fontSize="small" />
          </Badge>
        </IconButton>
        <Avatar
          variant="rounded"
          alt="Avatar"
          src="/images/avatar1.jpg"
          sx={{ width: 30, height: 30, ml: 1 }}
        />
        <Box ml={1}>
          <Typography fontWeight={500} fontSize={14}>
            Selena Vilanata
          </Typography>
          <Typography fontSize={12}>selena@gmail.com</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
