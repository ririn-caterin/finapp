import {
  Avatar,
  Box,
  Button,
  Container,
  Grid2,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Header from "./components/Header";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PaymentIcon from "@mui/icons-material/Payment";

const Page = () => {
  return (
    <Container>
      <Header />

      <Typography
        variant="h2"
        fontSize={24}
        fontWeight="500"
        sx={{ mt: "30px", mb: "4px" }}
      >
        Good Morning, Selena
      </Typography>
      <Typography fontSize="14px" color="#777">
        This is your finance report
      </Typography>

      <Grid2 container columnSpacing={2} sx={{ my: "30px" }}>
        {/* my balance */}
        <Grid2 size={4}>
          <Paper
            sx={{
              padding: 2,
              borderRadius: 2,
              boxShadow: "none",
              border: "1px solid #ddd",
              maxWidth: 400,
              margin: "auto",
              height: "100%",
            }}
          >
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              My balance
            </Typography>

            <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="h4" fontWeight="bold" mr={1}>
                $83,172.64
              </Typography>
              <Typography
                fontSize="12px"
                sx={{ color: "green", fontWeight: "bold", marginRight: 1 }}
              >
                +6,7%
              </Typography>
              <Typography fontSize="10px" color="text.secondary">
                compare to last month
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              <Typography
                variant="body1"
                sx={{ letterSpacing: "2px", flex: 1 }}
              >
                6549 7329 9821 2472
              </Typography>
              <IconButton
                size="small"
                sx={{
                  backgroundColor: "#f0f0f0",
                  borderRadius: 1,
                  marginLeft: 1,
                }}
              >
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Box>

            <Box display="flex" gap={2}>
              <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{ textTransform: "none" }}
              >
                Send money
              </Button>
              <Button
                variant="outlined"
                color="success"
                fullWidth
                sx={{ textTransform: "none" }}
              >
                Request money
              </Button>
            </Box>
          </Paper>
        </Grid2>
        {/* monthly income */}
        <Grid2 size={2}>
          <Paper
            sx={{
              padding: 2,
              borderRadius: 2,
              boxShadow: "none",
              border: "1px solid #ddd",
              maxWidth: 300,
              margin: "auto",
              height: "100%",
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "#e0f2f1",
                color: "#2e7d32",
                width: 40,
                height: 40,
                marginBottom: 2,
              }}
            >
              <PaymentIcon />
            </Avatar>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              marginBottom={2}
            >
              Monthly income
            </Typography>

            <Typography variant="h5" fontWeight="bold" mb={1}>
              $16,281.48
            </Typography>

            <Box display="flex" alignItems="center">
              <Typography
                fontSize="12px"
                sx={{ color: "green", fontWeight: "bold", marginRight: 1 }}
              >
                +9,8%
              </Typography>
              <Typography fontSize="10px" color="text.secondary">
                compare to last month
              </Typography>
            </Box>
          </Paper>
        </Grid2>
        {/* monthly expenses */}
        <Grid2 size={2}>
          <Paper
            sx={{
              padding: 2,
              borderRadius: 2,
              boxShadow: "none",
              border: "1px solid #ddd",
              maxWidth: 300,
              margin: "auto",
              height: "100%",
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "#fdecea",
                color: "#d32f2f",
                width: 40,
                height: 40,
                marginBottom: 2,
              }}
            >
              <PaymentIcon />
            </Avatar>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              marginBottom={2}
            >
              Monthly expenses
            </Typography>

            <Typography variant="h5" fontWeight="bold" mb={1}>
              $6,638.48
            </Typography>

            <Box display="flex" alignItems="center">
              <Typography
                fontSize="12px"
                sx={{ color: "green", fontWeight: "bold", marginRight: 1 }}
              >
                -8,6%
              </Typography>
              <Typography fontSize="10px" color="text.secondary">
                compare to last month
              </Typography>
            </Box>
          </Paper>
        </Grid2>
        <Grid2 size={4}>
          <Paper
            sx={{
              padding: 2,
              borderRadius: 2,
              boxShadow: "none",
              border: "1px solid #ddd",
              margin: "auto",
              height: "100%",
            }}
          >
            <Typography
              variant="subtitle2"
              color="text.secondary"
              marginBottom={2}
            >
              All Expenses
            </Typography>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Page;
