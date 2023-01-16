function Listings(job, currency) {
  return (
    <div>
      <h4>
        ${job.title} up to ${currency}${job.salary_max}
      </h4>
      <h5>${job.location.display_name}</h5>
      <p>${job.description}</p>
    </div>
  );
}

export default Listings;
