import React, { useState, useRef } from "react";
import { Button, Error, Input, FormField, Label, Textarea, Box } from "../styles";


function SignUpForm({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");
  const [user, setUser] = useState(true);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const avatar = useRef(null);
  
  
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    const formData = new FormData(e.target)
    debugger
    console.log("FORM DATA")
    console.log(formData);
    formData.append("name", name)
    formData.append("email", email)
    formData.append("username", username)
    formData.append("password", password)
    formData.append("password_confirmation", passwordConfirmation)
    formData.append("bio", bio)
    formData.append("role", role)
    console.log("FORM DATA 2")
    console.log(formData);
    // HOW DO I DIPLAY THE IMAGE ON THE PROFILE
    
    fetch("/api/signup", {
      method: "POST",
      body: formData
    })
    .then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } 
      else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="mediaUrl">Profile Image</Label>
        <Input
          type="file"
          name="avatar"
          ref={avatar}
          onChange={(e) => avatar.current=(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          rows="3"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </FormField>
        <Box>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="owner"
              checked={role === "owner"}
              onChange={(e) => setRole(e.target.value)}
            />
            I Own a Pet
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="walker"
              checked={role === "walker"}
              onChange={(e) => setRole(e.target.value)}
            />
            I Want to be a Walker
          </label>
        </div>
        </Box>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors?.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default SignUpForm;
