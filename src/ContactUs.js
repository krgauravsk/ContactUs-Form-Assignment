import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Grid } from "@mui/material";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const API_ENDPOINT = "https://api.example.com/contact";

  const onSubmit = (data) => {
    // Send data to the API
    fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        // Handle the response from the API
        if (response.ok) {
          console.log("Form data submitted successfully");
        } else {
          console.log("Error submitting form data");
        }
      })
      .catch((error) => {
        console.log("Error submitting form data:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          {/* Name field */}
          <TextField
            label="Name"
            {...register("name", { required: true })}
            error={!!errors.name}
            helperText={errors.name ? "Name is required" : ""}
            fullWidth
            placeholder="Full Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Email field */}
          <TextField
            label="Email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
            error={!!errors.email}
            helperText={errors.email ? "Invalid email address" : ""}
            fullWidth
            placeholder="xyz@abc.com"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Phone number field */}
          <TextField
            label="Phone Number"
            {...register("phoneNumber", {
              required: true,
              pattern: /^[0-9]{10}$/i
            })}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber ? "Invalid phone number" : ""}
            fullWidth
            placeholder="1234567890"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* ZIP code field */}
          <TextField
            label="ZIP Code"
            {...register("zipCode", {
              required: true,
              pattern: /^[0-9]{5}$/i
            })}
            error={!!errors.zipCode}
            helperText={errors.zipCode ? "Invalid zip code" : ""}
            fullWidth
            placeholder="XXXXX"
          />
        </Grid>
        <Grid item xs={12}>
          {/* Message field */}
          <TextField
            label="Message"
            multiline
            rows={4}
            {...register("message", { required: true })}
            error={!!errors.message}
            helperText={errors.message ? "Message is required" : ""}
            fullWidth
            placeholder="Please type it in here..."
          />
        </Grid>
        <Grid item xs={12}>
          {/* Submit button */}
          <Button
            type="submit"
            variant="contained"
            className="button"
            style={{ background: "#005981" }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ContactUs;
