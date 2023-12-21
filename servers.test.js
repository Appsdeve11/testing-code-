describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});

it('should add name to  on submitServerInfo()', function () {
    submitServerInfo();

    expect(submitServerinfo).toEqual(1);
    expect(submitServerinfo.value).toEqual('Alice');
  });

  it('it should not respond to invalid inputs', function () {
    submitServerInfo();
    //if the input was blank or "$", the function should not go through

    expect(submitServerInfo).toEqual(null);
  });

