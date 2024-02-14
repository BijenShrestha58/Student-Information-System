const Profile = () => {
  return (
    <div className="py-8 px-20 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="font-semibold lg:text-4xl md:text-xl text-base">
          Profile
        </div>
        <a
          href="/edit-profile"
          className="text-blue-900 bg-gray-300 hover:text-white hover:bg-blue-900 border-none text-base font-bold py-1 px-2  cursor-pointer rounded-lg no-underline"
        >
          Edit Profile
        </a>
      </div>
      <div className="flex w-full h-full">
        <section className="w-1/2">
          {" "}
          <div className="flex items-center w-full mb-4">
            <div className="rounded-full overflow-hidden mr-2">
              <img
                src="https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg"
                alt="profile"
              />
            </div>
            <div>
              <div className="font-bold text-3xl mb-2">Kylee Danford</div>
              <button className="text-red-600 bg-red-300 hover:text-white hover:bg-red-300 border-none text-base font-bold py-1 px-2  cursor-pointer rounded-3xl">
                ADMIN
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-400 mb-2">BASIC DETAILS</div>
            <div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-[200px]">Email:</div>
                <div className="text-base font-bold">
                  kyleedanfrod11@gmail.com
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-[200px]">
                  Mobile Number:
                </div>
                <div className="text-base font-bold">9865684564</div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-[200px]">
                  Date of Birth:
                </div>
                <div className="text-base font-bold">January 12, 1998</div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-[200px]">Gender:</div>
                <div className="text-base font-bold">Female</div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-[200px]">
                  Joining Date:
                </div>
                <div className="text-base font-bold">February 14, 2024</div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-[200px]">Address:</div>
                <div className="text-base font-bold">
                  Chyasal Chowk Lalitpur, Bagmati
                </div>
              </div>
              <div className="flex mb-2">
                <div className="text-base font-bold w-[200px]">
                  Qualification:
                </div>
                <div className="text-base font-bold">Bachelors</div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-1/2 px-8 flex flex-col">
          <div className="rounded bg-white border w-full h-1/2 p-2 font-semibold mb-2">
            <div>title</div>
          </div>
          <div className="rounded bg-white border w-full h-1/2 p-2 font-semibold">
            <div>title</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
