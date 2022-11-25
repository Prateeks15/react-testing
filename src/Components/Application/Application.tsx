export const Application = () => {
  return (
      <>
      <h1>Job Application Form</h1>
      <h2>Section 97</h2>

    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" /> 
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <textarea id="bio" name="bio" /> 
      </div>
      <div>
        <label htmlFor="job-location">Job location</label>
        <select id="job-location">
          <option value=""> Select a country</option>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="IN">India</option>
          <option value="AU"> Australia</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" id="tems" /> I agree to the terms and
       hey
        </label>
      </div>
      <button>Submit</button>
    </form>
    </>
  );
};
